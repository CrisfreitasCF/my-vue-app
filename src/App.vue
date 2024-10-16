
<script setup>
import { ref } from 'vue'

const promptText = ref('') // To store the input prompt
const submittedPrompts = ref([]) // To store the list of submitted prompts

// Function to handle the submit button click
const submitPrompt = () => {
  if (promptText.value.trim() !== '') { // Check if the prompt is not empty
    submittedPrompts.value.push(promptText.value) // Add the prompt to the list
    promptText.value = '' // Clear the input field after submission
  }
}
</script>

<template>
  <div class="container content mt-5">
    <!-- Title Row -->
    <div class="row">
      <div class="col-2"></div>
      <div class="col-8 text-center">
        <h1>Test</h1>
      </div>
      <div class="col-2"></div>
    </div>

    <!-- Textarea Row -->
    <div class="row mt-3">
      <div class="col-2"></div>
      <div class="col-8">
        <textarea
          v-model="promptText"
          id="prompt"
          class="form-control"
          rows="4"
          placeholder="Enter your prompt..."
        ></textarea>
      </div>
      <div class="col-2"></div>
    </div>

    <!-- Submit Button Row -->
    <div class="row mt-3">
      <div class="col-2"></div>
      <div class="col-8 text-center">
        <button type="button" class="btn btn-primary btn-lg w-100" @click="submitPrompt">
          Submit
        </button>
      </div>
      <div class="col-2"></div>
    </div>

    <!-- List of Submitted Prompts -->
    <div class="row mt-5" v-if="submittedPrompts.length">
      <div class="col-2"></div>
      <div class="col-8">
        <h3>Submitted Prompts:</h3>
        <ul class="list-group">
          <li v-for="(prompt, index) in submittedPrompts" :key="index" class="list-group-item">
            {{ index + 1 }}. {{ prompt }}
          </li>
        </ul>
      </div>
      <div class="col-2"></div>
    </div>
  </div>
</template>

<style scoped>
/* Custom styles if needed */
</style>
