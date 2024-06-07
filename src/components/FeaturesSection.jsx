import React from 'react';

// Feature Component
const Feature = ({ title, description }) => (
  <div style={styles.featureContainer}>
    <h2 style={styles.title}>{title}</h2>
    <p style={styles.description}>{description}</p>
  </div>
);

// Features Section Component
const FeaturesSection = ({ features }) => {
  return (
    <div style={styles.featuresSection}>
      {features.map((feature, index) => (
        <Feature key={index} title={feature.title} description={feature.description} />
      ))}
    </div>
  );
};

// Styles
const styles = {
  featuresSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    maxWidth: '800px',
    margin: 'auto',
    width: 'calc(100vw - 12rem)',
  },
  featureContainer: {
    marginBottom: '20px',
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
  },
  title: {
    fontSize: '24px',
    color: '#333',
    marginBottom: '10px'
  },
  description: {
    fontSize: '16px',
    color: '#666'
  }
};

export default FeaturesSection;
