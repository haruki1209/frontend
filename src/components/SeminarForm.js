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

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://127.0.0.1:8000/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            console.log('Server response:', result);  // サーバーからの応答をコンソールに表示
            navigate('/success', { state: { formData: result.data } });  // 成功画面に遷移しデータを渡す
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div className="form-container">
            <h2>セミナーお申し込みフォーム</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>お名前 必須</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>お名前(フリガナ) 必須</label>
                    <input
                        type="text"
                        name="furigana"
                        value={formData.furigana}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>貴社名 必須</label>
                    <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>メールアドレス 必須</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>電話番号 必須</label>
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
