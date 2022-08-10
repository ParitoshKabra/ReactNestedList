import logo from './logo.svg';
import NestedList from './components/nestedList';
import './App.css';

function App() {
  const states = [
    {
      name: "Madhya Pradesh",
      cities: [
        {
          name: "Indore",
          towns: [
            {
              name: "Mhow"
            },
            {
              name: "Dewas"
            }
          ]
        },
        {
          name: "Bhopal",
          towns: [
            {
              name: "Manit"
            },
            {
              name: "Berasia"
            }
          ]
        },
        {
          name: "Gwalior",
          towns: [
            {
              name: "Ajaypur"
            }
          ]
        }
      ]
    },
    {
      name: "Jharkhand",
      cities: [
        {
          name: "Dhanbad",
          towns: [
            {
              name: "IIT(ISM) Dhanbad"
            },
            {
              name: "Hirapur"
            }
          ]
        },
        {
          name: "Wasseypur",
          towns: [
            {
              name: "Sardar khan's"
            },
            {
              name: "Faizal khan's"
            }
          ]
        },
        {
          name: "Mirzapur",
          towns: [
            {
              name: "Kaleen bhaiya's"
            },
            {
              name: "Guddu bhaiya's"
            }
          ]
        }
      ]
    },
    {
      name: "Assam",
      cities: [
        {
          name: "Guwhati",
          towns: [
            {
              name: "Amin"
            },
            {
              name: "Jalah"
            }
          ]
        },
        {
          name: "Jungle1",
          towns: [
            {
              name: "Tiger found at IIT Guwahati"
            },
            {
              name: "Leopard found in IIT Guwahati"
            }
          ]
        },
        {
          name: "Tezpur",
          towns: [
            {
              name: "Dibrugarh"
            },
            {
              name: "Silchar"
            }
          ]
        }
      ]
    }
  ]
  return (
    <NestedList states={states}></NestedList>
  );
}

export default App;
