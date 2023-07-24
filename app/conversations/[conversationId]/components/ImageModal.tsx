"use client";

import Modal from "@/app/components/Modal";
import Image from "next/image";

interface ImageModalProps {
    isOpen?: boolean;
    onClose: () => void;
    src?: string | null;
}

const ImageModal = ({ onClose, isOpen, src }: ImageModalProps) => {

    if (!src) {
        return null;
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="w-80 h-80">
                <Image
                    alt="Image"
                    fill
                    src={src}
                />
            </div>
        </Modal>
    );
}

export default ImageModal;