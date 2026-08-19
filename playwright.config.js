import { defineConfig } from "playwright/test";

export default defineConfig({

  testDir : './tests',


  use : 
  {
    headless : false
  },

  projects : 
  [
    {
      name : 'chromium',
      use : 
      {
        browserName : 'chromium'
      }
    },
  
    {
      name : 'webkit',
      use : 
      {
        browserName : 'webkit'
      }
    }
  ]
});