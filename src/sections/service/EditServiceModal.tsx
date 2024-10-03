'use client';

import React, { FC, useState, useEffect } from 'react';

import {
  Dialog,
  Button,
  TextField,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';

import { IInquiryItem } from 'src/types/inquiry';

interface EditInquiryModalProps {
  open: boolean;
  onClose: () => void;
  initialData: IInquiryItem | null;
  onSave: (data: IInquiryItem) => void;
}

const EditInquiryModal: FC<EditInquiryModalProps> = ({ open, onClose, initialData, onSave }) => {
  const [formData, setFormData] = useState<IInquiryItem | null>(null);

  useEffect(() => {
    setFormData(initialData);
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev!,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSave = () => {
    if (formData) {
      onSave(formData);
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Edit Inquiry</DialogTitle>
      <DialogContent>
        <TextField
          margin="dense"
          name="name"
          label="Name"
          fullWidth
          variant="outlined"
          value={formData?.name || ''}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="email"
          label="Email"
          fullWidth
          variant="outlined"
          value={formData?.email || ''}
          onChange={handleChange}
        />
        {/* Add other fields as needed */}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSave} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditInquiryModal;
