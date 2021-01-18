import React from 'react';
import Background from '../components/Background.js';
import FormContact from '../components/FormContact.js';

export default function index() {
    return (
        <main className="hide-overflow">
            <Background />
            <div className="row">
                <div className="col-lg-7 contact-form">
                    <FormContact />
                </div>
            </div>
        </main>
    )
}
