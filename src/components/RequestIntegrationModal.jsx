import React, { useState } from 'react';
import { Modal, Form, Input, Button as AntButton, Space, message } from 'antd';
import { FiPlus, FiTrash2, FiSend } from 'react-icons/fi';
import { Button } from './ui';

const { TextArea } = Input;

export const RequestIntegrationModal = ({ isOpen, onClose }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values) => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Integration Request:', values);
    message.success('Integration request submitted successfully! Our team will review it shortly.');
    
    setLoading(false);
    form.resetFields();
    onClose();
  };

  return (
    <Modal
      title={
        <div className="text-center py-4">
          <h2 className="text-2xl font-bold text-white mb-2">Request New Integration</h2>
          <p className="text-sm text-gray-400">Tell us what tools you need and we'll make it happen</p>
        </div>
      }
      open={isOpen}
      onCancel={onClose}
      footer={null}
      width={700}
      className="request-integration-modal"
    >
      <div className="mt-6">
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          initialValues={{ tools: [''] }}
        >
          {/* Integration Name */}
          <Form.Item
            label={<span className="text-white font-semibold text-base">Integration Name</span>}
            name="integrationName"
            rules={[{ required: true, message: 'Please enter the integration name' }]}
          >
            <Input
              placeholder="e.g., Salesforce, HubSpot, Azure DevOps"
              className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 h-12 text-base"
              size="large"
            />
          </Form.Item>

          {/* Tools Required - Dynamic List */}
          <Form.List name="tools">
            {(fields, { add, remove }) => (
              <>
                <div className="mb-2">
                  <label className="text-white font-semibold text-base">Tools Required</label>
                  <p className="text-sm text-gray-400 mt-1">Add all the specific tools or features you need</p>
                </div>
                
                {fields.map(({ key, name, ...restField }, index) => (
                  <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                    <Form.Item
                      {...restField}
                      name={[name]}
                      rules={[{ required: true, message: 'Please enter a tool' }]}
                      className="mb-0 flex-1"
                      style={{ width: '100%' }}
                    >
                      <Input
                        placeholder={`Tool ${index + 1}: e.g., Create Lead, Send Email, Update Record`}
                        className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 h-11 text-base"
                        style={{ width: 560 }}
                      />
                    </Form.Item>
                    
                    {fields.length > 1 && (
                      <button
                        type="button"
                        onClick={() => remove(name)}
                        className="h-11 w-11 rounded-lg bg-red-500/20 hover:bg-red-500/30 border border-red-500/40 flex items-center justify-center text-red-400 transition-all"
                      >
                        <FiTrash2 className="w-4 h-4" />
                      </button>
                    )}
                  </Space>
                ))}
                
                <Form.Item className="mt-4">
                  <button
                    type="button"
                    onClick={() => add()}
                    className="w-full h-11 rounded-lg glass-hover border border-white/20 flex items-center justify-center gap-2 text-white font-semibold transition-all"
                  >
                    <FiPlus className="w-4 h-4" />
                    Add Another Tool
                  </button>
                </Form.Item>
              </>
            )}
          </Form.List>

          {/* Your Details */}
          <div className="mt-6 mb-4 pt-6 border-t border-white/10">
            <h3 className="text-white font-semibold text-lg mb-4">Your Details</h3>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Form.Item
              label={<span className="text-white font-semibold">Full Name</span>}
              name="name"
              rules={[{ required: true, message: 'Please enter your name' }]}
            >
              <Input
                placeholder="John Doe"
                className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 h-11"
                size="large"
              />
            </Form.Item>

            <Form.Item
              label={<span className="text-white font-semibold">TC Number</span>}
              name="tcNumber"
              rules={[{ required: true, message: 'Please enter TC number' }]}
            >
              <Input
                placeholder="TC-12345"
                className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 h-11"
                size="large"
              />
            </Form.Item>
          </div>

          <Form.Item
            label={<span className="text-white font-semibold">Email Address</span>}
            name="email"
            rules={[
              { required: true, message: 'Please enter your email' },
              { type: 'email', message: 'Please enter a valid email' }
            ]}
          >
            <Input
              placeholder="john.doe@company.com"
              className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 h-11"
              size="large"
            />
          </Form.Item>

          {/* Additional Notes */}
          <Form.Item
            label={<span className="text-white font-semibold">Additional Notes (Optional)</span>}
            name="notes"
          >
            <TextArea
              rows={4}
              placeholder="Any specific requirements, use cases, or urgency details..."
              className="bg-white/5 border-white/10 text-white placeholder:text-gray-500"
              maxLength={500}
              showCount
            />
          </Form.Item>

          {/* Submit Buttons */}
          <Form.Item className="mb-0 mt-6">
            <div className="flex gap-3 justify-end">
              <Button variant="ghost" onClick={onClose} disabled={loading}>
                Cancel
              </Button>
              <Button
                type="submit"
                icon={FiSend}
                iconPosition="right"
                className="px-8"
                disabled={loading}
              >
                {loading ? 'Submitting...' : 'Submit Request'}
              </Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </Modal>
  );
};

export default RequestIntegrationModal;

