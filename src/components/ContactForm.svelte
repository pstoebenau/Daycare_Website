<script lang="ts">
  import Textfield from '@smui/textfield';
  import CharacterCounter from '@smui/textfield/character-counter';
  import Button, { Label } from '@smui/button';

  let name = "";
  let email = "";
  let phone = "";
  let message = "";

</script>

<form name="contact" method="POST" data-netlify="true">
  <div class="flex flex-col gap-8">
    <p class="text-3xl">Join Waitlist</p>
    <Textfield bind:value={name} label="Name" type="text" required></Textfield>
    <Textfield bind:value={email} label="Email" type="email" required></Textfield>
    <Textfield bind:value={phone} label="Phone" type="tel" required></Textfield>
    <Textfield textarea input$maxlength={500} bind:value={message} label="Message">
      <CharacterCounter slot="internalCounter">0 / 500</CharacterCounter>
    </Textfield>
    <Button type="submit" class="py-7 text-base" touch variant="unelevated"><Label>Send</Label></Button>
  </div>
</form>
