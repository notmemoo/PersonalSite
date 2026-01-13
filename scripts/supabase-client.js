// Supabase Configuration
const SUPABASE_URL = 'https://ndibahrudhbqxtjcgvtu.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5kaWJhaHJ1ZGhicXh0amNndnR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgyNjM1MjEsImV4cCI6MjA4MzgzOTUyMX0.0SoAg5pq3PDDFzugOpUglwbSNwNQ33u6H_nmCPwbNjc';

// Initialize Supabase client (using different name to avoid conflict with CDN global)
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Fetch all notes from Supabase
async function fetchNotes() {
    const { data, error } = await supabaseClient
        .from('notes')
        .select('*')
        .order('display_order', { ascending: true });

    if (error) {
        console.error('Error fetching notes:', error);
        return null;
    }
    return data;
}

// Fetch a single note by ID
async function fetchNote(noteId) {
    const { data, error } = await supabaseClient
        .from('notes')
        .select('*')
        .eq('id', noteId)
        .single();

    if (error) {
        console.error('Error fetching note:', error);
        return null;
    }
    return data;
}

// Update a note
async function updateNote(noteId, updates) {
    const { data, error } = await supabaseClient
        .from('notes')
        .update(updates)
        .eq('id', noteId)
        .select()
        .single();

    if (error) {
        console.error('Error updating note:', error);
        return null;
    }
    return data;
}

// Create a new note
async function createNote(note) {
    const { data, error } = await supabaseClient
        .from('notes')
        .insert([note])
        .select()
        .single();

    if (error) {
        console.error('Error creating note:', error);
        return null;
    }
    return data;
}

// Delete a note
async function deleteNote(noteId) {
    const { error } = await supabaseClient
        .from('notes')
        .delete()
        .eq('id', noteId);

    if (error) {
        console.error('Error deleting note:', error);
        return false;
    }
    return true;
}

// Auth functions
async function signOut() {
    const { error } = await supabaseClient.auth.signOut();
    if (error) {
        console.error('Error signing out:', error);
        return false;
    }
    return true;
}

async function getSession() {
    const { data: { session } } = await supabaseClient.auth.getSession();
    return session;
}

// Listen for auth changes
function onAuthStateChange(callback) {
    supabaseClient.auth.onAuthStateChange((event, session) => {
        callback(event, session);
    });
}
