import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SeminarForm() {
  const [formData, setFormData] = useState({
    name: '',
    furigana: '',
    companyName: '',
    email: '',
    phoneNumber: '',
    inquiry: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // フォーム送信後に確認ページに遷移
    navigate('/confirmation');
  };

  return (
    <div className="form-container">
      <h2>セミナーお申し込みフォーム</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>お名前 <span className="required">必須</span></label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>お名前(フリガナ) <span className="required">必須</span></label>
          <input
            type="text"
            name="furigana"
            value={formData.furigana}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>貴社名 <span className="required">必須</span></label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>メールアドレス <span className="required">必須</span></label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>電話番号 <span className="required">必須</span></label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>何かご不明な点や質問事項等あればご記入ください</label>
          <textarea
            name="inquiry"
            value={formData.inquiry}
            onChange={handleChange}
          />
        </div>
        <button type="submit">送信内容を確認する</button>
      </form>
    </div>
  );
}

export default SeminarForm;
