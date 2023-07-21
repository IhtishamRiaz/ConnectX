
import { IconType } from 'react-icons';

interface AuthSocialButtonProps {
    icon: IconType,
    onClick: () => void
}

const AuthSocialButton = ({ icon: Icon, onClick }: AuthSocialButtonProps): JSX.Element => {
    return (
        <button
            type='button'
            onClick={onClick}
            className='inline-flex justify-center w-full rounded-md bg-white px-4 py-2 text-gray-500 shadow-md ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0'
        >
            <Icon />
        </button>
    )
}

export default AuthSocialButton;