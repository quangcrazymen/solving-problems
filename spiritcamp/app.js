// Requirements: Find two elements in an array
// with sum is equal the pre-defined sum
export const transformArrayToObject = (inputArr) => {
    var obj = {};
    for (var i = 0; i < inputArr.length / 2; i = i + 1) {
        obj[inputArr[i * 2]] = inputArr[i * 2 + 1];
    }
    return obj;
};

// Requirements: Transform an Array to an object
// Rules: The even elements is key of output object
// and the value is the following element (the odd elements)
export function findTwoElementsWithDefinedSum(inputArr, sum) {
    for (var i = 0; i < inputArr.length; ++i) {
        for (var j = i + 1; j < inputArr.length; ++j) {
            if (inputArr[i] + inputArr[j] === sum) {
                return [inputArr[i], inputArr[j]];
            }
        }
    }
    return undefined;
}

// Requirements: With an array of integer,
// every elements appears twice exept 1
// find that single number

export const foreverAloneNumber = (inputArr) => {
    for (var i = 0; i < inputArr.length; i = i + 2) {
        var check = false;
        for (var j = i + 1; j < inputArr.length; ++j) {
            if (inputArr[i] === inputArr[j]) {
                var temp = inputArr[i + 1];
                inputArr[i + 1] = inputArr[j];
                inputArr[j] = temp;
                check = true;
                break;
            }
        }
        if (check === false) {
            return inputArr[i];
        }
    }
    return undefined;
};



//Layout 1
import styled from "@emotion/styled";

export default function () {
    return (
        <Wrapper>
            <h3>Create layout as example in image below - USING GRID</h3>
            <p>Header width:100% - Header Height: 50px</p>
            <p>Sidebar width:100px (max-width: 30vw) - Sidebar Height: 300px</p>
            <p>main width: rest of screen with - main Height: 300px</p>
            <p>gap between main and sidebar: 20px</p>
            <img
                alt="css layouts"
                src="https://s3.amazonaws.com/noupe/img/css-layouts7.gif"
                data-pin-no-hover="true"
            />
            <div class="grid-container">
                <header>Header</header>
                <sidebar>Left Sidebar</sidebar>
                <main>Main Column</main>
                <sidebar>Right Sidebar</sidebar>
            </div>

            <hr />
        </Wrapper>
    );
}

// Code here
const Wrapper = styled.div`
  .grid-container {
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 0px 20px;
  }
  header {
    grid-column-start: 1;
    grid-column-end: 4;
    height: 50px;
    background: #f85a3e99;
  }
  sidebar {
    width: 100px;
    max-width: 30vw;
    display: block;
    background: #fccb1899;
    height: 300px;
  }
  main {
    background: #43aa8b99;
    height: 300px;
  }
`;

//Layout 2
import styled from "@emotion/styled";

export default function () {
    return (
        <Wrapper>
            <h3>Create previous layout - USING FLEXBOX</h3>
            <p>if screen width less than 480px - 4 sections will be on a column</p>
            <p>with the order: HEADER - LEFT SIDEBAR - RIGHT SIDEBAR - MAIN COLUMN</p>

            <div class="flex-parent-container">
                <header>Header</header>
                <div class="flex-child-container">
                    <sidebar>Left Sidebar</sidebar>
                    <main>Main Column</main>
                    <sidebar>Right Sidebar</sidebar>
                </div>
            </div>

            <hr />
        </Wrapper>
    );
}

// Code here
const Wrapper = styled.div`
  .flex-parent-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
  }
  .flex-child-container {
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 20px;
  }
  header {
    width: 100%;
    height: 50px;
    background: #f85a3e99;
  }
  sidebar {
    width: 100px;
    max-width: 30vw;
    height: 300px;
    display: block;
    background: #fccb1899;
  }
  main {
    height: 300px;
    flex-grow: 1;
    width: auto;
    background: #43aa8b99;
  }
  @media only screen and (max-width: 480px) {
    .flex-child-container {
      width: auto;
      flex-direction: column;
    }
    main {
      order: 1;
    }
    header {
      width: auto;
    }
    .flex-parent-container {
      gap: 20px;
      flex-wrap: nowrap;
      flex-direction: column;
    }
  }
`;

//Layout 3
import styled from "@emotion/styled";

export default function () {
    return (
        <Wrapper>
            <h3>Create layout like image below - USING FLEXBOX</h3>
            <p>Each row has maximum 3 items which meet four requirements</p>
            <p>first elements reach the container left side</p>
            <p>third elements reach the container right side</p>
            <p>
                the gap between element is <strong>EXACT 20PX</strong>
            </p>
            <p>
                the <strong>3n+1</strong> elements will locate below first one, the{" "}
                <strong>3n+2</strong> will locate below second one, the{" "}
                <strong>3n</strong> will locate below third one
            </p>

            <img src="https://prod-kitchko-s3.s3.ap-southeast-2.amazonaws.com/Screen%20Shot%202022-05-31%20at%202.33.18%20PM.png" />

            <div className="container">
                <div className="child">Child</div>
                <div className="child">Child</div>
                <div className="child">Child</div>
                <div className="child">Child</div>
                <div className="child">Child</div>
            </div>

            <hr />
        </Wrapper>
    );
}

// Code here
const Wrapper = styled.div`
  img {
    width: 600px;
    height: 80px;
    margin-bottom: 20px;
  }
  .container {
    width: 50vw;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
    background: rgba(100, 100, 100, 0.5);
  }

  .child {
    background: red;
    flex-basis: calc(100vw / 3 - 25px);
  }
`;
