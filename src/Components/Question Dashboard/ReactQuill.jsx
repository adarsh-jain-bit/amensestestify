import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const MyQuillEditor = () => {
    const [text, setText] = useState('');

    const modules = {
        toolbar: [
            [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
            ['bold', 'italic', 'underline'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['link'],
            ['clean'],
        ],
    };

    const formats = [
        'header',
        'bold',
        'italic',
        'underline',
        'list',
        'bullet',
        'link',
    ];

    const handleChange = (value) => {
        setText(value);
    };

    return (
        <div>
            <ReactQuill value={text} onChange={handleChange} modules={modules} formats={formats} />
        </div>
    );
};

export default MyQuillEditor;
