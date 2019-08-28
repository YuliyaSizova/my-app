import React from 'react';
import Header from './Header'
import SearchPanel from './SearchPanel'
import Types from './Types'
import MainPageTree from './MainPageTree'
class MainPage extends React.Component {
    render() {
        return (
                <div>
                    <Header/>
                <div>
                    <SearchPanel/>
                    <div  id="right-panel">
                        <div className="header">
                            <div>
                                <h4>Список объектов</h4>
                            </div>
                        </div>
                        <div id="right-panel-content">
                            <Types/>
                            {
                                <MainPageTree/>
                            }
                        </div>
                    </div>
                </div>
                </div>
        );
    }
}
export default MainPage;