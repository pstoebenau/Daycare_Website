<script lang="ts">
  import Textfield from '@smui/textfield';
  import CharacterCounter from '@smui/textfield/character-counter';

  let name = "";
  let email = "";
  let phone = "";
  let message = "";

</script>

<div class="flex flex-col gap-5">
  <p class="text-3xl">Contact</p>
  <Textfield bind:value={name} label="Name"></Textfield>
  <Textfield bind:value={email} label="Email"></Textfield>
  <Textfield bind:value={phone} label="Phone"></Textfield>
  <Textfield textarea input$maxlength={500} bind:value={message} label="Message">
    <!-- <CharacterCounter slot="internalCounter">0 / 500</CharacterCounter> -->
  </Textfield>
</div>
