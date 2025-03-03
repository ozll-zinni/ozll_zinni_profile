import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const TabList = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.6rem;
    border-top: 1px solid #111;
    border-bottom: 1px solid #111;

    & > label:not(:last-child) {
        border-right: 1px solid #111;

        @media only screen and (max-width: 380px) {
            border-right: none;
        }
    }

    @media only screen and (max-width: 380px) {
        flex-direction: column;
        border: none;
    }
`;

const TabButton = styled.label<{ $isChecked: boolean }>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 1.4rem 0.8rem;
    font-family: var(--font-default-eng);
    font-size: var(--font-text);
    font-weight: var(--font-weight-default);
    color: ${(props) => (props.$isChecked ? '#111' : 'var(--font-gray-color)')};

    & > span {
        flex-grow: 1;
    }

    @media only screen and (max-width: 734px) {
        padding: 1rem 0.6rem;
        border-bottom: 1px solid #ccc;
    }
`;

const CheckboxInput = styled.input`
    display: none;
`;

const CustomCheckbox = styled.div<{ $isChecked: boolean }>`
    flex-shrink: 0;
    width: 1.3rem;
    height: 1.3rem;
    border-radius: var(--default-radius-small);
    border: 1px solid ${(props) => (props.$isChecked ? '#111' : 'var(--font-gray-color)')};
    background-color: ${(props) => (props.$isChecked ? '#111' : 'transparent')};
    transition: all 0.2s ease;
    cursor: pointer;

    @media only screen and (max-width: 734px) {
        width: 1rem;
        height: 1rem;
    }
`;

interface TabNavigationProps {
    activeTab: string;
    handleTabChange: (tabId: string) => void;
}

const TabNavigation: React.FC<TabNavigationProps> = ({ activeTab, handleTabChange }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const tabData = [
        { id: 'personal', label: 'PERSONAL' },
        { id: 'team', label: 'TEAM' },
        { id: 'work', label: 'WORK' },
    ];

    useEffect(() => {
        const currentTab = tabData.find((tab) => `/project/${tab.id}` === location.pathname)?.id;
        if (currentTab) {
            handleTabChange(currentTab);
        }
    }, [location.pathname]);

    const handleTabSelection = (tabId: string) => {
        handleTabChange(tabId);
        navigate(`/project/${tabId}`);
    };

    return (
        <TabList>
            {tabData.map((tab) => (
                <TabButton key={tab.id} $isChecked={activeTab === tab.id}>
                    <span>{tab.label}</span>
                    <CheckboxInput
                        type="radio"
                        name="tab"
                        id={tab.id}
                        checked={activeTab === tab.id}
                        onChange={() => handleTabSelection(tab.id)}
                    />
                    <CustomCheckbox $isChecked={activeTab === tab.id} />
                </TabButton>
            ))}
        </TabList>
    );
};

export default TabNavigation;
