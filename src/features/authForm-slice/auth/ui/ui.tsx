"use client";

import { Form, TabsProps, Tabs, Button, message } from "antd";
import styles from "./ui.module.scss";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { AuthFormInputs } from "@/entities/authForm-slice/formInputs";

import { ProductLogo } from "@/shared/ui/logos/productLogo";
import { IAuth } from "@/shared/interface/auth";
import { loginUser, postUser } from "../api";
import { log } from "console";

export const AuthForm = () => {
  const [form] = Form.useForm();
  const router = useRouter();
  const [formData, setFormData] = useState<IAuth>({
    email: "",
    password: "",
  });
  const [isButtonDisable, setButtonDisable] = useState(true);
  const [isButtonLoading, setButtonLoading] = useState(false);
  const [tabItemID, setTabItemID] = useState(1);
  const [messageApi, contextHolder] = message.useMessage();
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Войти",
      children: (
        <AuthFormInputs
          type="auth"
          setFormData={setFormData}
          formData={formData}
          setSubmitted={setButtonDisable}
        />
      ),
    },
    {
      key: "2",
      label: "Регистрация",
      children: (
        <AuthFormInputs
          setFormData={setFormData}
          type="register"
          formData={formData}
          setSubmitted={setButtonDisable}
        />
      ),
    },
  ];

  const onRegister = async () => {
    try {
      setButtonLoading(true);
      const response = await postUser(formData);
      if (response instanceof Error) {
        messageApi.open({
          type: "error",
          content: "Пользователь уже существует",
        });
        setButtonLoading(false);
        return;
      } else {
        router.push("/analytics/");
      }

      return;
    } catch (error) {
      messageApi.open({
        type: "error",
        content: "Неверный логин или пароль",
      });
      setButtonLoading(false);
    }
  };
  const onLogin = async () => {
    try {
      setButtonLoading(true);
      const response = await loginUser(formData);
      if (response instanceof Error) {
        messageApi.open({
          type: "error",
          content: "Неверный логин или пароль",
        });
        setButtonLoading(false);
        return;
      } else {
        router.push("/analytics/");
      }

      return;
    } catch (error) {
      messageApi.open({
        type: "error",
        content: "Неверный логин или пароль",
      });
      setButtonLoading(false);
    }
  };
  return (
    <>
      {contextHolder}

      <section className={styles.layout}>
        <Form
          autoComplete="on"
          name="validateOnly"
          layout="vertical"
          className={styles.form}
          form={form}
        >
          <ProductLogo size={{ width: 280, height: 29 }} />
          <div className={styles.inputLayout}>
            <Tabs
              style={{ width: "100%" }}
              defaultActiveKey="1"
              items={items}
              onChange={(e) => setTabItemID(Number(e))}
            />

            <Form.Item style={{ width: "100%" }}>
              <Button
                onClick={tabItemID === 1 ? onLogin : onRegister}
                loading={isButtonLoading}
                disabled={isButtonDisable}
                size="large"
                style={{ width: "100%" }}
                type="primary"
                htmlType="submit"
              >
                {tabItemID === 1 ? "Войти" : "Зарегистрироваться"}
              </Button>
            </Form.Item>
          </div>
        </Form>
        <div className={styles.linkLayout}>
          <Link className={styles.link} href="/">
            postideas.ru
          </Link>
        </div>
      </section>
    </>
  );
};
