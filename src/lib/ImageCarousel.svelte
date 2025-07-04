<script lang="ts">
    let {
        images = [
            {
                url: 'arcanaScreen.png',
                title: 'Easy to use',
                description: 'Users select a tag and then press start to begin a focus session'
            },
            {
                url: 'arcanaIntegrated.png',
                title: 'Windows, MacOS, Linux Integrations',
                description: 'Arcana exists at the OS level, giving users a better sense of their time'
            },
            {
                url: 'arcanaAnalytics.png',
                title: 'Calendar Integration',
                description: 'Local SQLite DB saves user sessions instantly'
            }
        ]
    } = $props();
    // let images = 

    // Current active image index
    let currentIndex = $state(0);

    // Function to change to specific image
    function goToImage(index) {
        currentIndex = index;
    }

    // Function to go to next image
    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
    }

    // Function to go to previous image
    function previousImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
    }

</script>