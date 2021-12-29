import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./index.css";
function ProductPage() {
  const { id } = useParams();
  const [product, setProducts] = useState(null);
  useEffect(function () {
    //해당 id 에 맞는 요청
    axios
      .get(
        `https://8660fb5b-2e85-406c-a74c-efb23f8dd9ef.mock.pstmn.io/products/${id}`
      )
      .then(function (result) {
        setProducts(result.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  //null -> image 방어코드
  if (product === null) {
    return <h1>상품 정보를 받고 있는 중입니다...</h1>;
  }

  return (
    <div>
      <div id="image-box">
        <img src={"/" + product.imageUrl} />
      </div>
      <div id="profile-box">
        <img src="/images/icons/avatar.png" />
        <span>{product.seller}</span>
      </div>
      <div id="contents-box">
        <div id="name">{product.name}</div>
        <div id="price">{product.price}원</div>
        <div id="createdAt">2021년 12월 30일</div>
        <div id="description">{product.description}</div>
      </div>
    </div>
  );
}
//처음 렌더링만 호출되고 다음 네트워크 호출은 안불러줌

export default ProductPage;
