<script>
  export let data;
</script>

<style>
  .layout-container {
    max-width: 840px;
    margin: 5rem auto;
    padding: 3rem;
    background: linear-gradient(145deg, rgba(24,24,24,0.95), rgba(34,34,34,0.95));
    border-radius: 20px;
    box-shadow: 0 0 50px rgba(0, 255, 180, 0.15);
    color: #f0f0f0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    backdrop-filter: blur(10px);
    position: relative;
    overflow: hidden;
    animation: glowCycle 12s ease-in-out infinite alternate;
  }

  .layout-container::before {
    content: "";
    position: absolute;
    top: -20%;
    left: -20%;
    width: 150%;
    height: 150%;
    background: radial-gradient(circle, rgba(0,255,180,0.1) 0%, transparent 80%);
    animation: rotateBg 30s linear infinite;
    z-index: 0;
  }

  .layout-container h2 {
    font-size: 2.25rem;
    color: #2ecc71;
    margin-bottom: 2rem;
    text-align: center;
    position: relative;
    z-index: 1;
  }

  .layout-container > :not(h2) {
    position: relative;
    z-index: 1;
  }

  @keyframes glowCycle {
    0% {
      box-shadow: 0 0 30px rgba(0, 255, 180, 0.1);
    }
    100% {
      box-shadow: 0 0 70px rgba(0, 255, 180, 0.25);
    }
  }

  @keyframes rotateBg {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>

<div class="layout-container">
  <h2>💱 Währungsrechner</h2>
  <slot />
</div>