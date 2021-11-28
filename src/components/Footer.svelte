<script>
    const randInt = Math.floor(Math.random() * 300);
    const lastDigit = randInt % 10;
    let suffix = "th";
    if (lastDigit == 1) {
        suffix = "st";
    } else if (lastDigit == 2) {
        suffix = "nd";
    } else if (lastDigit == 3) {
        suffix = "rd";
    } else {
        suffix = "th";
    }
</script>

<footer>
    <p>Command Connect is a program by <a href="https://commandtech.dev" target="_blank" rel="noreferrer">Command Tech</a>, a student-led nonprofit fiscally sponsored by The Hack Foundation. Nonprofit EIN: 81-2908499.</p>
    <p>Congrats you are the {randInt}{suffix} visitor of the site! 🎉</p>
</footer>

<style>
    footer {
        max-width: 500px;
        margin: 0 auto;
    }
    p {
        text-align: center;
    }
</style>