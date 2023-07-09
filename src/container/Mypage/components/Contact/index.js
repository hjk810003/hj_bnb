import axios from "axios";
import { useState } from "react";
import { ContactForm, Input, SubmitBtn, ButtonBox } from "./styled";

function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  // 인풋 데이터를 담을 state 생성
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = values;

  // 인풋 change 이벤트
  const onChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  // 폼 전송(submit) 이벤트
  const onSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    // javascript FormData
    // https://ko.javascript.info/formdata
    const formData = new FormData();

    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);

    try {
      await axios.post(
        "https://script.google.com/macros/s/AKfycbz1N3l5R-EXwnXhL9tqJ6xocjIMw-ewBymcyEy2pfKEn6nVA8shzldWYUL9J13RA0jQpw/exec",
        formData
      );
      setIsLoading(false);
      alert("전송에 성공하였습니다.");
      setValues({
        name: "",
        email: "",
        message: "",
      });
    } catch (e) {
      setIsLoading(false);
      console.error(e);
    }
  };

  if (isLoading) return <span>로딩중!!</span>;

  return (
    <ContactForm onSubmit={onSubmit}>
      <Input
        type="text"
        value={name}
        name="name"
        placeholder="name"
        onChange={onChange}
      />
      <Input
        type="text"
        value={email}
        onChange={onChange}
        name="email"
        placeholder="email"
      />
      <Input
        type="text"
        value={message}
        onChange={onChange}
        name="message"
        placeholder="message"
      />

      <ButtonBox>
        <SubmitBtn type="submit">전송</SubmitBtn>
      </ButtonBox>
    </ContactForm>
  );
}

export default Contact;
