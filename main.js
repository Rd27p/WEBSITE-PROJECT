// Show main content and hide landing page

document.getElementById('enter-site').addEventListener('click', function() {
    document.getElementById('landing-page').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
});

setTimeout(function() {
    document.getElementById('landing-page').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
}, 3000); 

function updateVersion(version) {
    const versionElement = document.getElementById('version');
    versionElement.textContent = `Version: ${version}`;
}

document.querySelector('.y-button').addEventListener('click', function() {
    alert("Go to Raka Darma Youtube?");
});

document.querySelector('.i-button').addEventListener('click', function() {
    alert("Go to Raka Darma Instagram?");
});

window.onload = function() {
    updateVersion("0.0.5");
};
