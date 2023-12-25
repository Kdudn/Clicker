document.getElementById('Dark').addEventListener('click', () =>{
    document.documentElement.style.setProperty('--background-colour', '#3C3C3C')
    document.documentElement.style.setProperty('--text-color', '#C7C7BE')
    document.documentElement.style.setProperty('--button-background', '#4A4A4A')
    document.documentElement.style.setProperty('--button-border', '#191919')
    document.documentElement.style.setProperty('--button-text', '#C7C7BE')
})
document.getElementById('Light').addEventListener('click', () =>{
    document.documentElement.style.setProperty('--background-colour', '#FFFFFF')
    document.documentElement.style.setProperty('--text-color', '#000000')
    document.documentElement.style.setProperty('--button-background', '#EFEFEF')
    document.documentElement.style.setProperty('--button-border', '#f0f0f0')
    document.documentElement.style.setProperty('--button-text', '#000000')
})