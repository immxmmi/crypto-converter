<script>
  export let data;
</script>

<style>
  .hero {
    max-width: 960px;
    margin: 5rem auto;
    padding: 3rem;
    background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
    border-radius: 20px;
    box-shadow: 0 0 40px rgba(0, 255, 180, 0.2);
    text-align: center;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #ecf0f1;
    position: relative;
    overflow: hidden;
    backdrop-filter: blur(8px);
    animation: glowFade 10s ease-in-out infinite alternate;
  }

  .hero h1 {
    font-size: 3.75rem;
    margin-bottom: 1.2rem;
    color: #2ecc71;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    animation: fadeIn 1s ease-out;
  }

  .hero p {
    font-size: 1.3rem;
    margin-top: 1rem;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
    animation: fadeIn 1.5s ease-out;
  }

  .emoji {
    font-size: 4rem;
  }

  .status {
    margin-top: 3rem;
    font-size: 1.3rem;
    font-weight: bold;
    animation: fadeIn 2s ease-out;
    display: inline-block;
    padding: 0.75rem 1.25rem;
    border-radius: 8px;
    background-color: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(4px);
  }

  .logged-in {
    color: #2ecc71;
    border: 2px solid #2ecc71;
  }

  .logged-out {
    color: #e74c3c;
    border: 2px solid #e74c3c;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(10px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes glowFade {
    0% {
      box-shadow: 0 0 40px rgba(0, 255, 180, 0.2);
    }
    100% {
      box-shadow: 0 0 60px rgba(0, 255, 180, 0.35);
    }
  }
</style>

<div class="hero">
  <h1><span class="emoji">💱</span>Crypto Converter</h1>
  <p>Konvertiere Bitcoin & Ethereum sekundenschnell in Euro – mit aktuellen Kursen direkt von CoinGecko. Einfach. Schnell. Sicher.</p>

  {#if data?.loggedIn}
    <p class="status logged-in">✅ Du bist eingeloggt.</p>
  {:else}
    <p class="status logged-out">🔒 Nicht eingeloggt – bitte <a href="/login" style="color: #3498db;">einloggen</a>.</p>
  {/if}
</div>