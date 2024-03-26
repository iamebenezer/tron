window.onload = function() {
    var numStars = 1000; // Number of stars

    var starsContainer = document.getElementById('stars');
    var width = window.innerWidth;
    var height = window.innerHeight;

    // Create stars
    for (var i = 0; i < numStars; i++) {
        var star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * width + 'px';
        star.style.top = Math.random() * height + 'px';
        star.style.width = Math.random() * 2 + 'px';
        star.style.height = star.style.width;

        starsContainer.appendChild(star);
    }
}
