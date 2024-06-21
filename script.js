document.querySelectorAll('.toggleButton').forEach(function(button) {
    button.addEventListener('click', function() {
        var targetId = this.getAttribute('data-target');
        var targetElement = document.getElementById(targetId);
        var isVisible = targetElement.classList.contains('visible');
        
        document.querySelectorAll('.hiddenInfo').forEach(function(info) {
            info.classList.remove('visible');
            info.classList.add('hidden');
        });
        
        document.querySelectorAll('.toggleButton').forEach(function(btn) {
            btn.textContent = '';
        });
        
        if (!isVisible) {
            targetElement.classList.remove('hidden');
            targetElement.classList.add('visible');
            this.textContent = '';
        }
    });
});
