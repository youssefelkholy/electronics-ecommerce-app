import React from 'react';
import { BsFillEnvelopeAtFill } from "react-icons/bs";
import "./footer.css";

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-top">
                <h3 className="footer-top-title">متواجدين دائماً لمساعدتك</h3>
                <div className="footer-top-email">
                    <span className='footer-top-text'>تواصل معنا عبر الإيميل</span>
                    <span className='footer-top-email-address'>
                        <BsFillEnvelopeAtFill className='email-icon' />
                        store@electronics.com
                    </span>
                </div>
            </div>
            <div className="footer-items-wrapper">
                <div className="footer-item">
                    <h4 className="footer-item-title">الإلكترونيات</h4>
                    <ul className="footer-item-links">
                        <li className="footer-item-link">الکامیرات و تسجیل فیدیو</li>
                        <li className="footer-item-link">الأجهزه المنزلیه</li>
                        <li className="footer-item-link">الهواتف</li>
                        <li className="footer-item-link">سماعات الرأس</li>
                        <li className="footer-item-link">التلفیزیونات</li>
                        <li className="footer-item-link">اجهزه التابلیت</li>
                    </ul>
                </div>
                <div className="footer-item">
                    <h4 className="footer-item-title">الأزیاء</h4>
                    <ul className="footer-item-links">
                        <li className="footer-item-link">أزیاء رجالیه</li>
                        <li className="footer-item-link">أزیاء نسائیه</li>
                        <li className="footer-item-link">أزیاء الأولاد</li>
                        <li className="footer-item-link">نظارات</li>
                        <li className="footer-item-link">المجوهرات</li>
                        <li className="footer-item-link">الساعات</li>
                    </ul>
                </div>
                <div className="footer-item">
                    <h4 className="footer-item-title">المطبخ و الأجهزه المنزلیه</h4>
                    <ul className="footer-item-links">
                        <li className="footer-item-link">دیکورات منازل</li>
                        <li className="footer-item-link">الأثاث</li>
                        <li className="footer-item-link">المطبخ و أدوات الطعام</li>
                        <li className="footer-item-link">مستلزمات الحمام</li>
                        <li className="footer-item-link">اجهزه صوت و فیدیو</li>
                        <li className="footer-item-link">مستلزمات الحدائق</li>
                    </ul>
                </div>
                <div className="footer-item">
                    <h4 className="footer-item-title">الجمال</h4>
                    <ul className="footer-item-links">
                        <li className="footer-item-link">العطور</li>
                        <li className="footer-item-link">المکیاج</li>
                        <li className="footer-item-link">العنایه بالشعر</li>
                        <li className="footer-item-link">العنایه بالبشره</li>
                        <li className="footer-item-link">الجسم و الاستحمام</li>
                        <li className="footer-item-link">منتجات الرعایه الصحیه</li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
            <i className="bi bi-c-circle"></i> 2023
            کل الحقوق محفوظه
            </div>
        </div>
    )
}

export default Footer
