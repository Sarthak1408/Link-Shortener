import React from 'react'

const Modal = () => {
    return (
        <>
            <div className="modal-overlay">
                <div className="modal">
                    <div className="modal-header">
                        <h2>New Link</h2>
                        <button className="close-button">✕</button>
                    </div>
                    <div className="modal-content">
                        <form className="new-link-form">
                            <div className="form-group">
                                <label htmlFor="destination">
                                    Destination Url
                                    <span className="required">*</span>
                                </label>
                                <input
                                    type="url"
                                    id="destination"
                                    className="form-input"
                                    placeholder="https://web.whatsapp.com/"
                                    required=""
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="remarks">
                                    Remarks
                                    <span className="required">*</span>
                                </label>
                                <textarea
                                    id="remarks"
                                    className="form-input textarea"
                                    placeholder="Add remarks"
                                    required=""
                                    defaultValue={""}
                                />
                            </div>
                            <div className="form-group expiration-group">
                                <div className="expiration-header">
                                    <label htmlFor="expiration">Link Expiration</label>
                                    <label className="switch">
                                        <input type="checkbox" id="expiration" />
                                        <span className="slider" />
                                    </label>
                                </div>
                                <div className="date-input-wrapper">
                                    <input
                                        type="text"
                                        className="form-input"
                                        defaultValue="Jan 15, 2025, 11:56 PM"
                                        readOnly=""
                                    />
                                    <button type="button" className="calendar-button">
                                        📅
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary">
                            Clear
                        </button>
                        <button type="submit" className="btn btn-primary">
                            Create new
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Modal
