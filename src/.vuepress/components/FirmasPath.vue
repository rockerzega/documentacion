<template>
  <p>
    <code v-if="!auth">
      {{ method }} https://api-mybank.toc.com.ec/clients{{ path }}
    </code>
    <code v-if="auth">
      {{ method }} https://api-mybank.toc.com.ec/executive/auth{{ path }}
    </code>
  </p>
</template>

<script>
export default {
  props: {
    method: { type: String, required: true },
    path: { type: String, required: true },
    auth: { type: Boolean, default: false }
  },
}
</script>
