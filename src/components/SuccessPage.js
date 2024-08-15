import React from 'react';
import { useLocation } from 'react-router-dom';

function SuccessPage() {
    const location = useLocation();
    const formData = location.state?.formData;

    return (
        <div className="success-container">
            <h2>送信が完了しました</h2>
            {formData && (
                <div>
                    <p>お名前: {formData.name}</p>
                    <p>お名前(フリガナ): {formData.furigana}</p>
                    <p>貴社名: {formData.companyName}</p>
                    <p>メールアドレス: {formData.email}</p>
                    <p>電話番号: {formData.phoneNumber}</p>
                    <p>質問事項: {formData.inquiry}</p>
                </div>
            )}
        </div>
    );
}

export default SuccessPage;
