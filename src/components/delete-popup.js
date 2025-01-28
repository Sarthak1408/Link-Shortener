import React from 'react'

const DeletePopup = () => {
    return (
        <>
            <div className="modal-overlay">
                <div className="confirmation-modal">
                    <button className="close-button">×</button>
                    <div className="confirmation-content">
                        <p className="confirmation-message">
                            Are you sure, you want to delete it ?
                        </p>
                        <div className="confirmation-buttons">
                            <button className="btn btn-secondary">NO</button>
                            <button className="btn btn-primary">YES</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default DeletePopup
