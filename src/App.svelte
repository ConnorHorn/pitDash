<script>
    import 'twitch-stream-embed';
</script>

<style>
    .twitch-embed {
        position: fixed;
        top: 2rem; /* adjustable gap from the top */
        right: 2rem; /* adjustable gap from the right */
    }
</style>

<div class="twitch-embed">
    <twitch-stream height={window.innerHeight/2} width={window.innerWidth/2} channel="xqc"></twitch-stream>
</div>