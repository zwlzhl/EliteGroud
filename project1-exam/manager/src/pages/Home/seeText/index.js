import React from 'react';
import { connect } from 'dva';

import styles from './index.css';
import { Form, Select, Button, Radio } from 'antd';
const { Option } = Select;

function SeeText() {
  return (
    <div className={styles.wrap}>
      <Form>
        <Form.Item label="Form Layout" >
          <Radio.Group defaultValue="">
            <Radio.Button value="horizontal" className={styles.radio}>所有</Radio.Button>
            <Radio.Button value="vertical" className={styles.radio}>javaScripit上</Radio.Button>
            <Radio.Button value="inline" className={styles.radio}>javaScripit中下</Radio.Button>
            <Radio.Button value="inline" className={styles.radio}>模块化开发</Radio.Button>
            <Radio.Button value="inline" className={styles.radio}>移动端开发</Radio.Button>
            <Radio.Button value="inline" className={styles.radio}>节点基础</Radio.Button>
            <Radio.Button value="inline" className={styles.radio}>组件化开发（VUE）</Radio.Button>
            <Radio.Button value="inline" className={styles.radio}>渐进式开发（React）</Radio.Button>
            <Radio.Button value="inline" className={styles.radio}>项目实战</Radio.Button>
            <Radio.Button value="inline" className={styles.radio}>javaScripit高级</Radio.Button>
            <Radio.Button value="inline" className={styles.radio}>节点高级</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <div className={styles.select}>
          <h4>请选择考试类型:</h4>
          <Select
            value="周考1"
            style={{ width: 200,marginLeft: 10 }}
          >
            <Option value="1">周考1</Option>
            <Option value="1">周考2</Option>
            <Option value="2">周考3</Option>
            <Option value="3">月考</Option>
          </Select>
        </div>
        <div className={styles.select}>
          <h4>请选择考试类型:</h4>
          <Select
            value="周考1"
            style={{ width: 200 }}
          >
            <Option value="1">周考1</Option>
            <Option value="1">周考2</Option>
            <Option value="2">周考3</Option>
            <Option value="3">月考</Option>
          </Select>
        </div>
          <Button type="primary">查询</Button>
      </Form>
      <div className={styles.content}>
        <div className={styles.inner}>
          <div className={styles.left}>
            <ul>
              <li>机器人归位</li>
              <li>
                <span>代码补全</span>
                <span>javaScript上</span>
                <span>周考1</span>
              </li>
              <li>dingsahosan发布</li>
            </ul>
          </div>
          <div className={styles.right}>
            <p>编辑</p>
          </div>
        </div>
      </div>
    </div>
  );
}
SeeText.propTypes = {

};

export default connect()(SeeText);
