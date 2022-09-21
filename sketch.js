       // Set Global Variables 
       let values = [];
       let w = 2.8;
          
       // To store the state of each bar
       // in order to change the color
       let states = [];
          
          
       function setup() {
             
           // Create Canvas of Size Windows
           // Width * Windows Height
           createCanvas(800, 400);
          
           // Insert Random values in array
           values = new Array(floor(width/w));
          
           for(let i = 0; i < values.length; i++) {
               values[i] = float(random(height));
               states[i] = -1; 
           }
          
           // Print Unsorted Array
           print("Unsorted Array:" + values);
          
           // Call to bubble sort function
           bubbleSort(values, 0, values.length);
          
           // Print Sorted Array
           print("Sorted Array:" + values);
          
       }
          
       // Definition of bubble sort
       async function bubbleSort(arr, start, end) {
           if(start >= end) {
               return;
           }
           
           for(var i = 0; i < end-1; i++) {
            await sleep(55)
               for(var j = 0; j < end-i-1; j++) {
                   if(arr[j] >= arr[j+1]) {
                       states[j] = 1;
          
                       // Call to swap function
                       swap(arr, j, j+1);
                       states[j+1] = 0;
                   }
                   states[j] = 2;
               }
           }
           return arr;
       }
          
       // Definition of draw function
       function draw() {
           background(51);
             
           for(let i = 0; i < values.length; i++) {
               stroke(0);
               fill(255);
                 
               if(states[i] == 0) {
                   fill(255, 0, 0);
               }
               else if (states[i] == 1) {
                     
                   // Element currently sorting
                   fill("#58FA82");
               }
               else {
                   fill(255);
               }
               rect(i*w, height - values[i], w, values[i]);
           }
       }
          
       // Definition of swap function
     function swap(arr, a, b) {
            

           let t = arr[a];
           arr[a] = arr[b];
           arr[b] = t;
       }
          
       // Definition of sleep function
       function sleep(ms) {
           return new Promise(resolve => setTimeout(resolve, ms));
       }