<script lang="ts">
  import Textfield from '@smui/textfield';
  import HelperText from '@smui/textfield/helper-text';

  let name = "";

</script>

<div>
  <p class="text-sm">Contact Form</p>
  <Textfield bind:value={name} label="Name">
    <HelperText slot="helper">Helper Text</HelperText>
  </Textfield>
</div>