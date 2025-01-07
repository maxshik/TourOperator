import React, { forwardRef, useImperativeHandle, useState } from "react";
import { Steps, Modal, Button, Popconfirm, message } from "antd";
import InputMask from "react-input-mask";
import "../style/tours.css";
import emailjs from "emailjs-com";

const MakeOrder = forwardRef((props, ref) => {
  const [current, setCurrent] = useState(0);
  const [messageApi, contextHolder] = message.useMessage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({});

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useImperativeHandle(ref, () => ({
    openModal: showModal,
  }));

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  function sendEmail() {
    emailjs
      .send(
        "service_s5851il",
        "template_74z19j4",
        formData,
        "fCcPQ4hvU3KQxcM19"
      )
      .then(
        (result) => {
          console.log("Email successfully sent!", result.text);
        },
        (error) => {
          console.error("There was an error sending the email: ", error.text);
        }
      );
  }
  

  return (
    <>
      {contextHolder}
      <Modal
        title="Оформление заказа"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
        width={window.screen.availWidth / 1.4}
      >
        <Steps
          current={current}
          items={[
            {
              title: "В процессе",
              description: "Ввод данных",
            },
            {
              title: "Подтверждение",
            },
            {
              title: "Финиш",
              description: "Ожидайте звонка",
            },
          ]}
        />
        <form onSubmit={(e) => {
          e.preventDefault();
          sendEmail();
        }}>
          <label>
            Имя:
            <input type="text" name="user_name" required onChange={handleInputChange} />
          </label>
          <label>
            E-mail:
            <input type="text" name="user_email" required onChange={handleInputChange} />
          </label>
          <label>
            Номер телефона:
            <InputMask
              mask="+375 (99) 999-99-99"
              className="mobile__number"
              required
              name="user_phone"
              onChange={handleInputChange}
            />
          </label>
          <Popconfirm
            placement="rightBottom"
            title="Подтвердите введенные вами данные"
            okText="Да"
            cancelText="Не верно"
            onConfirm={() => {
                console.log('onConfirm is called');
                setCurrent(2);
                messageApi.open({
                  type: "success",
                  content: "Поздравляем, в ближайшее время с вами свяжется наш сотрудник",
                });
                setTimeout(() => {
                  setIsModalOpen(false);
                  setCurrent(0);
                }, 2000);
                sendEmail();
              }}
          >
            <Button
              type="primary"
              onClick={() => {
                setCurrent(1);
              }}
            >
              Отправить
            </Button>
          </Popconfirm>
        </form>
      </Modal>
    </>
  );
});

export default MakeOrder;
