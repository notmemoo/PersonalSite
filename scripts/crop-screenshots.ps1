Add-Type -AssemblyName System.Drawing

function Crop-Image($inputPath, $outputPath, $height) {
    $img = [System.Drawing.Image]::FromFile($inputPath)
    $cropHeight = [math]::Min($height, $img.Height)
    $cropRect = New-Object System.Drawing.Rectangle(0, 0, $img.Width, $cropHeight)
    $cropped = New-Object System.Drawing.Bitmap($cropRect.Width, $cropRect.Height)
    $g = [System.Drawing.Graphics]::FromImage($cropped)
    $g.DrawImage($img, 0, 0, $cropRect, [System.Drawing.GraphicsUnit]::Pixel)
    $cropped.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $g.Dispose()
    $cropped.Dispose()
    $img.Dispose()
    Write-Host "Cropped: $outputPath ($($cropRect.Width)x$cropHeight)"
}

Crop-Image "C:\Users\memom\.clawdbot\media\browser\c27cfb7b-32c1-4f22-aac7-42a79ba44deb.jpg" "C:\Users\memom\projects\PersonalSite\assets\projects\ash-performance.jpg" 400
Crop-Image "C:\Users\memom\.clawdbot\media\browser\9a55b1a6-a280-40ef-b4e9-f1f9c861b6cd.jpg" "C:\Users\memom\projects\PersonalSite\assets\projects\varsity-soles.jpg" 400
