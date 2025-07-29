import { useState } from 'react'
import testImg from '../../../public/test-img.png'

type ForumSection = 'main' | 'five-ingredients' | 'heirloom-recipes' | 'cultural-wonders' | 'healthy-beverages' |'healthy-desserts'| 'test';

const forumData = {
  main: [
    { id: 1, title: "Best Pasta Recipes", author: "Chef_Mike", replies: 23, lastPost: "2 hours ago", duration: "30 min", tag: ["comfort", "italian", "saucy"] },
    { id: 2, title: "Healthy Breakfast Ideas", author: "HealthyEater", replies: 15, lastPost: "4 hours ago", duration: "30 min", tag: ["comfort", "italian", "saucy"] },
    { id: 3, title: "Quick Dinner Solutions", author: "BusyMom", replies: 8, lastPost: "1 day ago", duration: "30 min", tag: ["comfort", "italian", "saucy"] }
  ],
  five_ingredients: [
    { id: 4, title: "Amazing 3-Ingredient Cookies", author: "SimpleChef", replies: 12, lastPost: "1 hour ago", duration: "30 min", tag: ["comfort", "italian", "saucy"] },
    { id: 5, title: "5-Minute Avocado Toast", author: "QuickEats", replies: 7, lastPost: "3 hours ago", duration: "30 min" }
  ],
  heirloom: [
    { id: 6, title: "Beginner's Guide to Baking", author: "BakeNewbie", replies: 31, lastPost: "30 minutes ago", duration: "30 min" },
    { id: 7, title: "My First Homemade Pizza", author: "FirstTimer", replies: 18, lastPost: "2 hours ago", duration: "30 min" }
  ],
  culture: [
    { id: 6, title: "Beginner Birria", author: "MeatSpecialty", replies: 31, lastPost: "30 minutes ago", duration: "30 min" },
    { id: 7, title: "Chicken Schwarma", author: "FavChicken", replies: 18, lastPost: "2 hours ago", duration: "30 min" }
  ],
  drinks: [
    { id: 6, title: "Agua Fresca", author: "DrinksGalore", replies: 31, lastPost: "30 minutes ago", duration: "30 min" },
    { id: 7, title: "Protein Shake", author: "RippedNShredded", replies: 18, lastPost: "2 hours ago", duration: "30 min" }
  ],
  desserts: [
    { id: 8, title: "Chocolate Lava Cake Recipe", author: "SweetTooth", replies: 45, lastPost: "1 hour ago", duration: "30 min" },
    { id: 9, title: "No-Bake Cheesecake", author: "DessertLover", replies: 22, lastPost: "5 hours ago", duration: "30 min" }
  ],
  test : []
};

type ForumPost = {
  id: number;
  title: string;
  author: string;
  replies: number;
  lastPost: string;
  duration: string;
  tag?: string[];
};


export default function Dashboard() {

    const [activeSection, setActiveSection] = useState('main');

    const handleSectionChange = (section: ForumSection) => {
    setActiveSection(section);
  };

  const getCurrentData = (): ForumPost[] => {
    switch(activeSection) {
      case 'main': return forumData.main;
      case 'five-ingredients': return forumData.five_ingredients;
      case 'heirloom-recipes': return forumData.heirloom;
      case 'cultural-wonders' : return forumData.culture;
      case 'healthy-beverages' : return forumData.drinks;
      case 'healthy-desserts': return forumData.desserts;
      case 'test' : return forumData.test;
      default: return forumData.main;
    }
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

  const [showModal, setShowModal] = useState(false);

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
        <section className='post my-5'>
            <h2 className="mb-4">{getSectionTitle()}</h2>

            <button onClick={() => setShowModal(true)} type="button" className="btn btn-primary">
            Create Post
          </button>
              {showModal && (
                <div className="modal-backdrop-light">
                  <div className="modal-box-light">
                    <div className="modal-header">
                      <h5>Modal Title</h5>
                      <button onClick={() => setShowModal(false)} className="close-button">&times;</button>
                    </div>
                    <div className="modal-body">
                      <form action="/submit" method="post">
                          <label >Name:</label>
                          <input type="text" id="name" name="name" required/><br></br>
                          
                          <label >Recipe Name:</label>
                          <input type="email" id="email" name="email" required/><br></br>
                          
                          <label >Ingredients:</label>
                          <textarea id="message" name="message"></textarea><br></br>

                          <label >Recipe Steps:</label>
                          <textarea id="message" name="message"></textarea>
                      </form>

                    </div>
                    <div className="modal-footer">
                      <button onClick={() => setShowModal(false)} className="btn btn-secondary">Close</button>
                      <button className="btn btn-primary">Save changes</button>
                    </div>
                  </div>
                </div>
              )}

            {getCurrentData().map((post) => (
            <section className='recipe-post' key={post.id}>
                <img src={testImg} style={{width: '150px'}}></img>
                <section>
                    <h1>{post.title}</h1>
                    <p>By: {post.author}</p>
                    <p>Duration: {post.duration}</p>
                    <section>
                        <section>
                        {post.tag?.map((t, index) => (
                            <span key={index} className='tag'>{t}</span>
                        ))}
                        </section>
                    </section>
                </section>
            </section>
            ))}
            
        </section>
    </>
  )
}
