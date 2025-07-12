import { useState } from 'react'
import testImg from '../../../public/test-img.png'

type ForumSection = 'main' | 'five-ingredients' | 'heirloom-recipes' | 'cultural-wonders' | 'healthy-beverages' |'healthy-desserts';
export default function Dashboard() {
    // const forumData = {
    //     main: [ {title: "Best Pasta Recipes"}, {title: "Healthy Breakfast Ideas"}],
    //     fiveIngredients: [ {title: "5 Ingredients or Less"}, {title: "Quinoa Salad"}],
    //     heirloomRecipes: [ {title: "Greek salad"}, {title: "Lentil Soup"}],
    //     healthyDesserts: [ {title: "Key Lime Pie"}, {title: "Pudding"}],
    // }

    const [activeSection, setActiveSection] = useState('main');

    const handleSectionChange = (section: ForumSection) => {
    setActiveSection(section);
  };

  const getSectionTitle = () => {
    switch(activeSection) {
      case 'main': return 'Spotlight Recipes';
      case 'five-ingredients': return '5 Ingredients or Less';
      case 'heirloom-recipes': return 'Heirloom Recipes';
      case 'cultural-wonders' : return 'Cultural Wonders';
      case 'healthy-beverages' : return 'Healthy Beverages';
      case 'healthy-desserts': return 'Healthy Desserts';
      default: return 'Main Forum';
    }
  };

  return (
    <>
        <section className='dashboard-menu'>
            <nav className="nav flex-column side-panel">
                <button 
                    className={`nav-link text-start ${activeSection === 'main' ? 'active' : ''}`}
                    onClick={() => handleSectionChange('main')}
                    style={{border: 'none', background: 'none'}}
                >
                    Main
                </button>
                <button 
                    className={`nav-link text-start ${activeSection === 'five-ingredients' ? 'active' : ''}`}
                    onClick={() => handleSectionChange('five-ingredients')}
                    style={{border: 'none', background: 'none'}}
                >
                    5 Ingredients or Less
                </button>
                <button 
                    className={`nav-link text-start ${activeSection === 'heirloom-recipes' ? 'active' : ''}`}
                    onClick={() => handleSectionChange('heirloom-recipes')}
                    style={{border: 'none', background: 'none'}}
                >
                    Heirloom Recipes
                </button>
                <button 
                    className={`nav-link text-start ${activeSection === 'cultural-wonders' ? 'active' : ''}`}
                    onClick={() => handleSectionChange('cultural-wonders')}
                    style={{border: 'none', background: 'none'}}
                >
                    Cultural Wonders
                </button>
                <button 
                    className={`nav-link text-start ${activeSection === 'healthy-beverages' ? 'active' : ''}`}
                    onClick={() => handleSectionChange('healthy-beverages')}
                    style={{border: 'none', background: 'none'}}
                >
                    Healthy Beverages
                </button>
                <button 
                    className={`nav-link text-start ${activeSection === 'healthy-desserts' ? 'active' : ''}`}
                    onClick={() => handleSectionChange('healthy-desserts')}
                    style={{border: 'none', background: 'none'}}
                >
                    Healthy Desserts
                </button>
            </nav>
        </section>  
        <section className='fixed-top my-5'>
            <h2 className="mb-4">{getSectionTitle()}</h2>
            <button className=''>Create Post</button>
            <section className='recipe-post'>
                <img src={testImg} style={{width: '150px'}}></img>
                <section>
                    <h1>Good Recipe</h1>
                    <p>Duration: 20 min</p>
                    <section>
                        <span className='tag'>Mediterranean</span>
                        <span className='tag'>Under 15 min</span>
                        <span className='tag'>Healthy</span>
                    </section>
                </section>
            </section>
            <section className='recipe-post'>
                <img src={testImg} style={{width: '150px'}}></img>
                <section>
                    <h1>Good Recipe</h1>
                    <p>Duration: 20 min</p>
                    <section>
                        <span className='tag'>Mediterranean</span>
                        <span className='tag'>Under 15 min</span>
                        <span className='tag'>Healthy</span>
                    </section>
                </section>
            </section>
            <section className='recipe-post'>
                <img src={testImg} style={{width: '150px'}}></img>
                <section>
                    <h1>Good Recipe</h1>
                    <p>Duration: 20 min</p>
                    <section>
                        <span className='tag'>Mediterranean</span>
                        <span className='tag'>Under 15 min</span>
                        <span className='tag'>Healthy</span>
                    </section>
                </section>
            </section>
        </section>
    </>
  )
}
