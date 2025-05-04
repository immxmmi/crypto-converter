<script>
  import { onMount } from 'svelte';

  let crypto = 'bitcoin';
  let amount = 1;
  let result = null;

  async function fetchRate() {
    const res = await fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${crypto}&vs_currencies=eur`
    );
    const data = await res.json();
    result = data[crypto].eur * amount;
  }

  onMount(fetchRate);
</script>

<style>
  label {
    display: block;
    margin-bottom: 1rem;
    font-weight: bold;
  }

  select {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #444;
    border-radius: 8px;
    background-color: #222;
    color: #fff;
    font-size: 1rem;
    margin-bottom: 1rem;
    appearance: none;
    background-image: url("data:image/svg+xml;utf8,<svg fill='white' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/></svg>");
    background-repeat: no-repeat;
    background-position: right 0.7rem center;
    background-size: 1rem;
  }

  select:focus {
    outline: none;
    border-color: #2ecc71;
    box-shadow: 0 0 6px #2ecc71;
  }

  option {
    background-color: #222;
    color: #fff;
  }

  input {
    width: 100%;
    padding: 0.75rem;
    border: none;
    border-radius: 6px;
    background-color: #333;
    color: #fff;
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  .result {
    margin-top: 2rem;
    text-align: center;
    font-size: 1.2rem;
    background: #2ecc71;
    color: #121212;
    padding: 1rem;
    border-radius: 8px;
    font-weight: bold;
  }
</style>

<label for="crypto">Kryptowährung:</label>
<select id="crypto" bind:value={crypto} on:change={fetchRate}>
  <option value="bitcoin">Bitcoin</option>
  <option value="ethereum">Ethereum</option>
</select>

<label>
  Betrag:
  <input type="number" bind:value={amount} on:input={fetchRate} />
</label>

{#if result}
  <div class="result">
    💶 {amount} {crypto} = {result.toFixed(2)} EUR
  </div>
{/if}