import React, { useState } from 'react';
import { Modal, Form, Input, Rate, message } from 'antd';
import { FiSend } from 'react-icons/fi';
import { Button } from './ui';

const { TextArea } = Input;

export const FeedbackModal = ({ isOpen, onClose }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values) => {
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Feedback submitted:', values);
    message.success('Thank you for your feedback!');
    
    setLoading(false);
    form.resetFields();
    onClose();
  };

  return (
    <Modal
      title={<span className="text-white text-xl font-bold">Send Feedback</span>}
      open={isOpen}
      onCancel={onClose}
      footer={null}
      width={600}
      className="feedback-modal"
    >
      <div className="mt-4">
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          initialValues={{ rating: 5 }}
        >
          <Form.Item
            label={<span className="text-white font-semibold">How would you rate your experience?</span>}
            name="rating"
            rules={[{ required: true, message: 'Please provide a rating' }]}
          >
            <Rate className="text-2xl" />
          </Form.Item>

          <Form.Item
            label={<span className="text-white font-semibold">Email (optional)</span>}
            name="email"
            rules={[{ type: 'email', message: 'Please enter a valid email' }]}
          >
            <Input
              placeholder="your@email.com"
              className="bg-white/5 border-white/10 text-white placeholder:text-gray-500"
              size="large"
            />
          </Form.Item>

          <Form.Item
            label={<span className="text-white font-semibold">Your Feedback</span>}
            name="feedback"
            rules={[
              { required: true, message: 'Please provide your feedback' },
              { min: 10, message: 'Feedback must be at least 10 characters' }
            ]}
          >
            <TextArea
              rows={6}
              placeholder="Tell us what you think..."
              className="bg-white/5 border-white/10 text-white placeholder:text-gray-500"
              maxLength={1000}
              showCount
            />
          </Form.Item>

          <Form.Item className="mb-0">
            <div className="flex gap-3 justify-end">
              <Button variant="ghost" onClick={onClose} disabled={loading}>
                Cancel
              </Button>
              <Button
                type="submit"
                icon={FiSend}
                iconPosition="right"
                className="px-6"
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send Feedback'}
              </Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </Modal>
  );
};

export default FeedbackModal;

