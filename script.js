// NAMMI Constructions Logo Animation Controller

let currentAnimation = 'master';

/**
 * Switch between animation variants
 */
function showAnimation(type) {
    // Remove active class from all containers and buttons
    document.querySelectorAll('.animation-container').forEach(container => {
        container.classList.remove('active');
    });
    
    document.querySelectorAll('.animation-selector button:not(:last-child)').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Reset all animations by forcing a reflow
    const containers = document.querySelectorAll('.animation-container');
    containers.forEach(container => {
        container.style.display = 'none';
        void container.offsetWidth; // Force reflow
    });
    
    // Add active class to selected animation
    const selectedContainer = document.getElementById(`${type}-animation`);
    if (selectedContainer) {
        selectedContainer.style.display = 'flex';
        setTimeout(() => {
            selectedContainer.classList.add('active');
        }, 50);
    }
    
    // Update button state
    event.target.classList.add('active');
    currentAnimation = type;
}

/**
 * Replay the current animation
 */
function replayAnimation() {
    const activeContainer = document.querySelector('.animation-container.active');
    if (!activeContainer) return;
    
    // Remove active class to reset animation
    activeContainer.classList.remove('active');
    
    // Force reflow
    void activeContainer.offsetWidth;
    
    // Re-add active class to replay
    setTimeout(() => {
        activeContainer.classList.add('active');
    }, 50);
}

/**
 * Initialize on page load
 */
document.addEventListener('DOMContentLoaded', () => {
    // Automatically start the master animation
    const masterContainer = document.getElementById('master-animation');
    if (masterContainer) {
        setTimeout(() => {
            masterContainer.classList.add('active');
        }, 300);
    }
    
    // Add keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        switch(e.key) {
            case '1':
                document.querySelector('.animation-selector button:nth-child(1)').click();
                break;
            case '2':
                document.querySelector('.animation-selector button:nth-child(2)').click();
                break;
            case '3':
                document.querySelector('.animation-selector button:nth-child(3)').click();
                break;
            case 'r':
            case 'R':
                replayAnimation();
                break;
        }
    });
});

/**
 * Performance optimization: Preload animations
 */
window.addEventListener('load', () => {
    // Pre-calculate animation paths for smoother playback
    document.querySelectorAll('path[stroke-dasharray]').forEach(path => {
        const length = path.getTotalLength();
        path.style.strokeDasharray = length;
        path.style.strokeDashoffset = length;
    });
});
