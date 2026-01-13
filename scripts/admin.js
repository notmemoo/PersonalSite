// Admin Panel Logic
document.addEventListener('DOMContentLoaded', async () => {
    // Elements
    const loginScreen = document.getElementById('login-screen');
    const adminDashboard = document.getElementById('admin-dashboard');
    const loginForm = document.getElementById('login-form');
    const emailInput = document.getElementById('email-input');
    const loginMessage = document.getElementById('login-message');
    const userEmailEl = document.getElementById('user-email');
    const logoutBtn = document.getElementById('logout-btn');
    const notesList = document.getElementById('notes-list');
    const notesListView = document.getElementById('notes-list-view');
    const editorContainer = document.getElementById('editor-container');
    const editorBack = document.getElementById('editor-back');
    const noteForm = document.getElementById('note-form');
    const newNoteBtn = document.getElementById('new-note-btn');
    const deleteNoteBtn = document.getElementById('delete-note-btn');
    const cancelBtn = document.getElementById('cancel-btn');
    const statusToast = document.getElementById('status-toast');

    // Form fields
    const noteIdInput = document.getElementById('note-id');
    const noteTitleInput = document.getElementById('note-title');
    const notePreviewInput = document.getElementById('note-preview');
    const noteContentInput = document.getElementById('note-content');
    const noteOrderInput = document.getElementById('note-order');

    // Editor tabs
    const editorTabs = document.querySelectorAll('.editor-tab');
    const visualPanel = document.getElementById('visual-panel');
    const htmlPanel = document.getElementById('html-panel');
    const htmlEditor = document.getElementById('html-editor');
    const htmlPreview = document.getElementById('html-preview');

    let currentNotes = [];
    let currentEditorMode = 'visual';

    // Initialize Quill editor
    const quill = new Quill('#quill-editor', {
        theme: 'snow',
        placeholder: 'Write your content here...',
        modules: {
            toolbar: [
                ['bold', 'italic', 'underline'],
                [{ 'header': [1, 2, 3, false] }],
                [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                ['link'],
                ['clean']
            ]
        }
    });

    // Editor tab switching
    editorTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetTab = tab.dataset.tab;

            // Sync content between editors when switching
            if (targetTab === 'html' && currentEditorMode === 'visual') {
                // Going from visual to HTML - get Quill content
                htmlEditor.value = quill.root.innerHTML;
                updateHtmlPreview();
            } else if (targetTab === 'visual' && currentEditorMode === 'html') {
                // Going from HTML to visual - set Quill content
                quill.root.innerHTML = htmlEditor.value;
            }

            currentEditorMode = targetTab;

            // Update tab states
            editorTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Update panel visibility
            if (targetTab === 'visual') {
                visualPanel.classList.add('active');
                htmlPanel.classList.remove('active');
            } else {
                visualPanel.classList.remove('active');
                htmlPanel.classList.add('active');
            }
        });
    });

    // Live preview for HTML editor
    htmlEditor.addEventListener('input', updateHtmlPreview);

    function updateHtmlPreview() {
        htmlPreview.innerHTML = htmlEditor.value;
    }

    // Check auth state on load
    const session = await getSession();
    if (session) {
        showDashboard(session.user.email);
        loadNotes();
    } else {
        showLogin();
    }

    // Listen for auth changes (for magic link redirect)
    onAuthStateChange((event, session) => {
        if (event === 'SIGNED_IN' && session) {
            showDashboard(session.user.email);
            loadNotes();
        } else if (event === 'SIGNED_OUT') {
            showLogin();
        }
    });

    // Login form submit
    const passwordInput = document.getElementById('password-input');

    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = emailInput.value.trim();
        const password = passwordInput.value;

        if (!email || !password) return;

        loginMessage.classList.add('hidden');

        try {
            const { data, error } = await supabaseClient.auth.signInWithPassword({
                email: email,
                password: password
            });

            if (error) {
                showMessage(error.message, 'error');
            } else if (data.session) {
                showDashboard(data.session.user.email);
                loadNotes();
            }
        } catch (err) {
            showMessage('Login failed. Please try again.', 'error');
        }
    });

    // Logout
    logoutBtn.addEventListener('click', async () => {
        await signOut();
        showLogin();
    });

    // New Note
    newNoteBtn.addEventListener('click', () => {
        openEditor(null);
    });

    // Back to list
    editorBack.addEventListener('click', () => {
        closeEditor();
    });

    cancelBtn.addEventListener('click', () => {
        closeEditor();
    });

    // Save note
    noteForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const noteId = noteIdInput.value;

        // Get content from the active editor mode
        let content;
        if (currentEditorMode === 'html') {
            content = htmlEditor.value;
        } else {
            content = quill.root.innerHTML;
        }

        const noteData = {
            title: noteTitleInput.value,
            preview: notePreviewInput.value,
            content: content,
            display_order: parseInt(noteOrderInput.value) || 0,
            updated_at: new Date().toISOString()
        };

        let result;
        if (noteId) {
            // Update existing
            result = await updateNote(noteId, noteData);
        } else {
            // Create new
            noteData.id = generateNoteId(noteTitleInput.value);
            noteData.date = formatDate(new Date());
            result = await createNote(noteData);
        }

        if (result) {
            showToast('Note saved! ✅', 'success');
            closeEditor();
            loadNotes();
        } else {
            showToast('Failed to save note', 'error');
        }
    });

    // Delete note
    deleteNoteBtn.addEventListener('click', async () => {
        const noteId = noteIdInput.value;
        if (!noteId) return;

        if (confirm('Are you sure you want to delete this note?')) {
            const success = await deleteNote(noteId);
            if (success) {
                showToast('Note deleted', 'success');
                closeEditor();
                loadNotes();
            } else {
                showToast('Failed to delete note', 'error');
            }
        }
    });

    // Functions
    function showLogin() {
        loginScreen.classList.remove('hidden');
        adminDashboard.classList.add('hidden');
    }

    function showDashboard(email) {
        loginScreen.classList.add('hidden');
        adminDashboard.classList.remove('hidden');
        userEmailEl.textContent = `Logged in as: ${email}`;
    }

    function showMessage(text, type) {
        loginMessage.textContent = text;
        loginMessage.className = `login-message ${type}`;
        loginMessage.classList.remove('hidden');
    }

    async function loadNotes() {
        notesList.innerHTML = '<li class="loading">Loading notes...</li>';

        const notes = await fetchNotes();

        if (!notes || notes.length === 0) {
            notesList.innerHTML = '<li class="loading">No notes yet. Create your first one!</li>';
            currentNotes = [];
            return;
        }

        currentNotes = notes;
        renderNotesList(notes);
    }

    function renderNotesList(notes) {
        notesList.innerHTML = notes.map(note => `
            <li class="note-card" data-id="${note.id}">
                <div class="note-card-content">
                    <h3>${escapeHtml(note.title)}</h3>
                    <p>${escapeHtml(note.preview || 'No preview')}</p>
                </div>
                <span class="note-card-arrow">›</span>
            </li>
        `).join('');

        // Add click handlers
        notesList.querySelectorAll('.note-card').forEach(card => {
            card.addEventListener('click', () => {
                const noteId = card.dataset.id;
                const note = currentNotes.find(n => n.id === noteId);
                if (note) openEditor(note);
            });
        });
    }

    function openEditor(note) {
        notesListView.classList.add('hidden');
        editorContainer.classList.add('active');

        // Reset to HTML mode by default (preserves custom classes)
        currentEditorMode = 'html';
        editorTabs.forEach(t => t.classList.remove('active'));
        document.querySelector('.editor-tab[data-tab="html"]').classList.add('active');
        visualPanel.classList.remove('active');
        htmlPanel.classList.add('active');

        if (note) {
            // Editing existing note
            noteIdInput.value = note.id;
            noteTitleInput.value = note.title || '';
            notePreviewInput.value = note.preview || '';

            // Load into both editors
            const content = note.content || '';
            quill.root.innerHTML = content;
            htmlEditor.value = content;
            updateHtmlPreview();

            noteOrderInput.value = note.display_order || 0;
            deleteNoteBtn.classList.remove('hidden');
        } else {
            // New note
            noteIdInput.value = '';
            noteTitleInput.value = '';
            notePreviewInput.value = '';
            quill.root.innerHTML = '';
            htmlEditor.value = '';
            htmlPreview.innerHTML = '';
            noteOrderInput.value = currentNotes.length + 1;
            deleteNoteBtn.classList.add('hidden');
        }
    }

    function closeEditor() {
        editorContainer.classList.remove('active');
        notesListView.classList.remove('hidden');
    }

    function showToast(message, type) {
        statusToast.textContent = message;
        statusToast.className = `status-toast ${type} show`;

        setTimeout(() => {
            statusToast.classList.remove('show');
        }, 3000);
    }

    function generateNoteId(title) {
        return title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-|-$/g, '') +
            '-' + Date.now().toString(36);
    }

    function formatDate(date) {
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }) + ' at ' + date.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit'
        });
    }

    function escapeHtml(text) {
        if (!text) return '';
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
});
