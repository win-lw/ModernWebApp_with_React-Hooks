import React from "react";
import Logo from './Logo';
import Button from "../styles/button/button";

const Header = () => {
  let companyName = "CCT";
  const companyAdress = <p>Ubon</p>;
  let num = 10;
  const showMessage = () => {
    return companyName + ".com";
  };
  const isLogin = false;

  const showMe = () => {
    alert('Hello React');
  }

  const products = [
    {id:1, name: 'Coke'},
    {id:2, name: 'Pepsi'}
  ]

  return (
    <div>
      <h1>บริษัท {companyName}</h1>
      {companyAdress}
      {num + 100} <br />
      {showMessage()}
      {isLogin === true && (
        <>
          <p>ยินดีต้อนรับ</p>
          <p>ยินดีต้อนรับ2</p>
        </>
      )
      }
      {
        isLogin ? <Logo /> : <p>ไม่มีสิทธิ์ดูโลโก้</p>
      }

      <br />

        <Button  onClick={showMe}>Click me</Button>

      
      <br />

      <ul>
      {
        products.map((product, index) => {
          return (
              <li key={product.id}>{product.name} {index+1}</li>
          )

        })
      }
      </ul>

      <hr />
    </div>
  );
};

export default Header;
