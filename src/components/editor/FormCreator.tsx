import React, { useEffect, useState } from "react";
import get from "lodash.get";
import map from "lodash.map";
import { Form, Input, InputNumber, Button, Switch, Card, Radio } from "antd";
import { FormItemProps } from "antd/lib/form";
import { DeleteOutlined } from "@ant-design/icons";
import { themes } from "./conifg";

type ItemConfig = {
  type: string /** 组件类型 */;
  attributeId: string;
  displayName: string;
  formItemProps?: FormItemProps;
  cfg?: {
    [k: string]: any /**其它和组件本身有关的配置 */;
  };
};

type Props = {
  /** 表单配置 */
  name: string;
  config: ItemConfig[];
  /** 表单已配置内容 */
  value: {
    [key: string]: any;
  };
  onChange: (v: any, immediately?: boolean) => void;
};

type FProps = { value: any; onChange?: (v) => void };

function Range({
  value = [],
  onChange,
}: {
  value: string[];
  onChange?: (v: any) => void;
}) {
  const handleChange = (v, index) => {
    if (index === 0) {
      onChange([v, value[1]]);
      return;
    }
    onChange([value[0], v]);
  };
  return (
    <Input.Group compact>
      <Input
        onChange={(e) => handleChange(e.target.value, 0)}
        style={{ width: "50%" }}
        value={value[0]}
      />
      <Input
        onChange={(e) => handleChange(e.target.value, 1)}
        style={{ width: "50%" }}
        value={value[1]}
      />
    </Input.Group>
  );
}

// eslint-disable-next-line react/display-name
const FormItemComponentMap = (type: string) => (props: FProps) => {
  switch (type) {
    case "theme":
      return (
        <Radio.Group {...props} value={props.value} buttonStyle="solid">
          {themes.map((t) => (
            <Radio.Button key={t.key} value={t.key}>
              {t.name}
            </Radio.Button>
          ))}
        </Radio.Group>
      );
    case "checkbox":
      return <Switch {...props} checked={props.value} />;
    case "input":
      return <Input {...props} />;
    case "number":
      return <InputNumber {...props} />;
    case "textarea":
      return <Input.TextArea rows={4} {...props} />;
    case "range":
      return <Range {...props} />;
    default:
      return <Input />;
  }
};

export const FormCreator: React.FC<Props> = ({
  name,
  value,
  onChange,
  config,
}) => {
  const handleChange = (values: any) => {
    let immediately = false;
    const keys = Object.keys(values);
    if (
      keys.includes("theme") ||
      keys.includes("display") ||
      keys.includes("circle")
    ) {
      immediately = true;
    }
    onChange(
      {
        [name]: { ...value, ...values },
      },
      immediately
    );
  };

  return (
    <div className="form-creator">
      <Card>
        <Form
          labelCol={{ span: 4 }}
          initialValues={value}
          autoComplete="off"
          onValuesChange={handleChange}
        >
          {map(config, (c) => {
            return (
              <Form.Item
                key={c.attributeId}
                label={c.displayName}
                wrapperCol={c.displayName ? { span: 18 } : { span: 24 }}
                name={c.attributeId}
                {...(c.formItemProps || {})}
              >
                {FormItemComponentMap(c.type)({
                  ...(c.cfg || {}),
                  value: get(value, [c.attributeId]),
                })}
              </Form.Item>
            );
          })}
        </Form>
      </Card>
    </div>
  );
};

type ListProps = {
  name: string;
  config: ItemConfig[];
  value: {
    [key: string]: any;
  };
  onChange: (v: any, immediately?: boolean) => void;
};

export const FormListCreator: React.FC<ListProps> = ({
  name,
  config,
  onChange,
  value,
}) => {
  const onValuesChange = (value, allValues) => {
    onChange(allValues);
  };
  return (
    <Form
      className="form-creator"
      autoComplete="off"
      initialValues={value}
      onValuesChange={onValuesChange}
    >
      <Form.List name={name}>
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }, index) => (
              <Card style={{ marginBottom: 12 }} key={index}>
                <Button
                  className="remove-icon"
                  icon={<DeleteOutlined />}
                  onClick={() => remove(index)}
                  type="primary"
                  ghost
                ></Button>

                {map(config, (c) => {
                  return (
                    <Form.Item
                      name={[name, c.attributeId]}
                      key={c.attributeId}
                      label={c.displayName}
                      labelCol={{ span: 4 }}
                      wrapperCol={c.displayName ? { span: 18 } : { span: 24 }}
                    >
                      {FormItemComponentMap(c.type)({
                        ...(c.cfg || {}),
                      })}
                    </Form.Item>
                  );
                })}
              </Card>
            ))}
            <Form.Item>
              <Button type="primary" ghost onClick={() => add({})} block>
                添加
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
    </Form>
  );
};
