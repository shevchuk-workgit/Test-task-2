<template>
  <button class="button button__text"><slot></slot></button>
</template>

<script>
export default {};
</script>

<style>
.button {
  background-color: #fff;
  border: 2px solid teal;
  border-radius: 3px;
  margin-top: 15px;

  transition: 0.2s;
}
.button:hover {
  background-color: rgba(0, 0, 0, 0.2);
}
.button:active {
  background-color: rgba(0, 0, 0, 0.4);
}
.button__text{
  font-family: "Times New Roman", Times, serif;
  font-size: 18px;
  font-weight: 500;
}
</style>
