import React, { useState } from "react";
import "./Form.css";

export const Form = ({ closeForm }: any) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  function handleSubmit(event: any) {
    event.preventDefault();

    closeForm();
  }

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h3>O que precisa?</h3>
      <input
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Descrição"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <div className="form__buttons">
        <input type="button" value="Cancelar" onClick={closeForm} />
        <input type="submit" value="Criar Chat" />
      </div>
    </form>
  );
};
