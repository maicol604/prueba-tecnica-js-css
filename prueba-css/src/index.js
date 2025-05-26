
var arrayTest = [1, 2, 3, 3, 2, 1, 4];

function find(arr) {
  let result = 0;
  for (let num of arr) {
    result ^= result ^ num;
  }
  return result;
}

document.getElementById("app").innerHTML = `
  <img src="./src/assets/bg-triangles.png" class="bg-triangles"/>
  <header>
    <h1>Unique Element Challenge</h1>
    <img src="./src/assets/logo.svg" />
  </header>

  <div class="content">
    <div>
      <h2>Target</h2>
      <div>Find the unique value in the array that is not duplicated. Use the <b>dubbed</b> function to return the unique element.</div>

      <h2>Considerations</h2>
      <ul>
        <li>Values are duplicated only twice.</li>
        <li>There is only one non duplicate value.</li>
        <li>The non duplicate value can be placed anywhere on the array.</li>
        <li>The result must be an integer.</li>
      </ul>
    </div>
    
    <div class="data">
      <section class="data-header">
        <h2>Test Data</h2>
        <div>${arrayTest}</div>
      </section>
        
      <section class="data-results">
        <div class="expected">
          <h2>Expected result</h2>
          <div>4</div>
        </div>

          
        <div class="result">
          <h2>Your Result</h2>
          <div>${find(arrayTest)}</div>
        </div>
      </section>


    </div>
  </div>

`;
