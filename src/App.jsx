import { useState } from "react";
import Modal from "./components/Modal";
import "./App.css";

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <>
      <div className="app">
        <button onClick={() => setIsModalVisible(true)}>Open modal</button>
        <p style={{ fontSize: "4rem" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus eveniet, soluta necessitatibus dicta aliquam
          dolorem? Aliquam doloremque debitis totam quia dignissimos odit repellendus natus veniam provident! Ipsam
          necessitatibus debitis eius possimus qui doloremque magni. Pariatur, a cum aspernatur quod ad nam unde quasi
          adipisci explicabo itaque doloremque sint illum optio.
        </p>
      </div>

      <Modal isVisible={isModalVisible} setIsVisible={setIsModalVisible} title="Lorem ipsum dolor sit amet.">
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <h2>Lorem ipsum dolor sit amet.</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum blanditiis repudiandae libero distinctio ea
            quidem, corrupti sequi in similique odit, expedita iste soluta eaque excepturi architecto laboriosam atque
            facilis cupiditate. Similique, atque eaque. Enim esse, sapiente, nobis dolorum eveniet aliquid id qui odit
            illo perspiciatis quia soluta. Illum ad rem incidunt animi, labore similique expedita eaque quidem suscipit
            autem, nam soluta, sapiente quo corporis facere praesentium ea unde molestiae non corrupti quasi pariatur
            dolores adipisci? Dolorum laboriosam non dolor ea.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum blanditiis repudiandae libero distinctio ea
            quidem, corrupti sequi in similique odit, expedita iste soluta eaque excepturi architecto laboriosam atque
            facilis cupiditate. Similique, atque eaque. Enim esse, sapiente, nobis dolorum eveniet aliquid id qui odit
            illo perspiciatis quia soluta. Illum ad rem incidunt animi, labore similique expedita eaque quidem suscipit
            autem, nam soluta, sapiente quo corporis facere praesentium ea unde molestiae non corrupti quasi pariatur
            dolores adipisci? Dolorum laboriosam non dolor ea.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum blanditiis repudiandae libero distinctio ea
            quidem, corrupti sequi in similique odit, expedita iste soluta eaque excepturi architecto laboriosam atque
            facilis cupiditate. Similique, atque eaque. Enim esse, sapiente, nobis dolorum eveniet aliquid id qui odit
            illo perspiciatis quia soluta. Illum ad rem incidunt animi, labore similique expedita eaque quidem suscipit
            autem, nam soluta, sapiente quo corporis facere praesentium ea unde molestiae non corrupti quasi pariatur
            dolores adipisci? Dolorum laboriosam non dolor ea.
          </p>
          <button>Submit</button>
        </div>
      </Modal>
    </>
  );
}
