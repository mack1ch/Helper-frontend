"use client";

import { Form, Input } from "antd";
import styles from "./ui.module.scss";
import { RequestFields } from "../data";
import { useEffect } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";

import { isNonEmptyArray } from "@/shared/lib/check/array";
import { IAuth } from "@/shared/interface/auth";

export const AuthFormInputs = ({
  setSubmitted,
  formData,
  setFormData,
  type = "auth",
}: {
  setSubmitted: (arg: boolean) => void;
  formData: IAuth;
  type: "auth" | "register";
  setFormData: React.Dispatch<React.SetStateAction<IAuth>>;
}) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    // Проверяем готовность формы при изменении данных
    if (!isFormValid(formData)) {
      setSubmitted(true);
    } else setSubmitted(false);
  }, [formData, setSubmitted]);

  const isFormValid = (values: Partial<IAuth>): boolean => {
    return RequestFields.every((fieldName) => {
      const fieldValue = values[fieldName];
      return (
        fieldValue !== undefined &&
        fieldValue !== null &&
        fieldValue !== "" &&
        (Array.isArray(fieldValue) ? isNonEmptyArray(fieldValue) : true)
      );
    });
  };
  return (
    <>
      <div className={styles.layout}>
        <Form.Item
          style={{
            width: "100%",
            textAlign: "start",
            alignItems: "flex-start",
          }}
          label="Почта"
        >
          <Input
            prefix={
              <UserOutlined
                style={{ color: "#cfcfcf" }}
                className="site-form-item-icon"
              />
            }
            name={"email"}
            value={formData.email}
            onChange={handleInputChange}
            size="large"
            placeholder="Почта"
          />
        </Form.Item>
        <Form.Item
          style={{
            width: "100%",
            textAlign: "start",
            alignItems: "flex-start",
          }}
          label="Пароль"
        >
          <Input.Password
            prefix={
              <LockOutlined
                style={{ color: "#cfcfcf" }}
                className="site-form-item-icon"
              />
            }
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            type="password"
            size="large"
            placeholder="Введите пароль"
          />
        </Form.Item>
      </div>
    </>
  );
};
