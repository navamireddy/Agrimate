from transformers import pipeline
from PIL import Image

classifier = pipeline(
    "image-classification",
    model="linkanjarad/mobilenet_v2_1.0_224-plant-disease-identification",
    trust_remote_code=True
)

def predict(image_path):
    image = Image.open(image_path).convert("RGB")
    result = classifier(image)
    return result[0]["label"]

if __name__ == "__main__":
    print("Running prediction...")
    disease = predict("test.jpg")
    print("Detected disease:", disease)